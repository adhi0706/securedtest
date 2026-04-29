import { useInView } from "react-intersection-observer";
//import AnimatedNumbers from "react-animated-numbers";

// const Counter = ({ endValue }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//     initialInView: true,
//   });

//   return (
//     <div ref={ref}>
//       {inView && (
//         <AnimatedNumbers
//           animateToNumber={endValue}
//           transitions={(index) => ({
//             type: "tween",
//             duration: index + 0.3,
//           })}
//         />
//       )}
//     </div>
//   );
// };

const Statitics = () => {
  return (
    <div data-aos="fade-up" className="statistics">
      <div className="grid grid-col grid-cols-1 lg:grid-cols-3 gap-4">
        <StatisticsCard
          unit=""
          number={100}
          postNumber={"+"}
          subtitle={"Projects Secured"}
        />
        <StatisticsCard
          unit=""
          number={2400}
          postNumber={"+"}
          subtitle={"Vulnerability detected"}
        />
        <StatisticsCard
          unit="$"
          number={"600"}
          postNumber={" Millions+"}
          subtitle={"Digital Assets Protected"}
        />
      </div>
    </div>
  );
};

const StatisticsCard = ({ unit = "", number, postNumber, subtitle }) => {
  return (
    <div className="statistics-card">
      <div className="pt-2 text-2xl mg:text-3xl lg:text-4xl font-bold">
        <div className="flex items-end gap-x-1">
          {unit}
          {/* {<Counter endValue={number} />} */}
          {number}
          {postNumber}
        </div>
      </div>
      <div className="statistics-card-subtitle">{subtitle}</div>
    </div>
  );
};

export default Statitics;
