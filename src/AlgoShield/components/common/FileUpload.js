const FileUpload = ({ file, handleChange }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    //const droppedFile = event.dataTransfer.files[0];
    handleChange(event);
  };

  const handleFileSelect = (event) => {
    handleChange(event);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    handleChange(event);
  };

  return (
    <div className="flex flex-col items-center justify-center h-64 w-full border-2 border-dashed border-[#E5E7EB] rounded-lg bg-gray-50 p-4">
      <div
        className="h-full w-full flex items-center justify-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <div>
            <span className="text-lg text-gray-700">
              Drag & drop your file here, or{" "}
              <span className="text-[#2563EB]">browse</span>
            </span>
            <div className="text-[#9CA3AF] flex flex-col items-center justify-center">
              Maximum Size: 50 MB
            </div>
          </div>
          <input
            id="file-upload"
            type="file"
            accept=".sol"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
      </div>

      {file && (
        <div className="mt-4 w-full break-normal flex items-center justify-center">
          <div className="text-gray-700 mb-2 truncate">{file.name}</div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
