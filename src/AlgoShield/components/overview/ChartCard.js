const ChartCard = ({ children, className }) => {
  return (
    <div className={`sss-chart-card-container ${className}`}>
      <div className="sss-chart-card">{children}</div>
    </div>
  );
};

export default ChartCard;
