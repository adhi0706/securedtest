from pyteal import *

def approval_program():
    # CWE-798: Hardcoded credentials (for admin check)
    hardcoded_admin = Addr("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ")  # Vulnerable

    @Subroutine(TealType.uint64)
    def is_admin():
        return Txn.sender() == hardcoded_admin

    # CWE-284 + CWE-862: No access control on critical functions
    @Subroutine(TealType.uint64)
    def delete_contract():
        return Approve()  # No check on sender – anyone can delete

    # CWE-190: Integer Overflow in balance update
    @Subroutine(TealType.none)
    def deposit():
        current_balance = App.localGet(Txn.sender(), Bytes("balance"))
        amount = Btoi(Txn.application_args[1])
        new_balance = Add(current_balance, amount)  # No overflow check
        return Seq([
            App.localPut(Txn.sender(), Bytes("balance"), new_balance),
            Approve()
        ])

    # CWE-377: Insecure use of a pseudo temp field for randomness-based logic
    @Subroutine(TealType.uint64)
    def lottery():
        random_seed = Global.latest_timestamp()  # Not safe
        pseudo_random = Mod(random_seed, Int(2))  # 50% chance
        return If(pseudo_random == Int(0), Approve(), Reject())

    program = Cond(
        [Txn.application_id() == Int(0), Approve()],  # OnCreate
        [Txn.on_completion() == OnComplete.DeleteApplication, delete_contract()],
        [Txn.application_args[0] == Bytes("deposit"), deposit()],
        [Txn.application_args[0] == Bytes("lottery"), lottery()],
        [Txn.application_args[0] == Bytes("admin_check"), Return(is_admin())],
    )
    return program

def clear_state_program():
    return Approve()

if __name__ == "__main__":
    print(compileTeal(approval_program(), mode=Mode.Application, version=7))

