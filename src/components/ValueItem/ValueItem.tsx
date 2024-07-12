export default function ValueItem({ icon, children }: any) {
  return (
    <div className="ValueItem">
      <div className="ValueItem__icon">{/* <SvgIcon width="75px" name={icon} /> */}</div>
      <span className="ValueItem__title">{children}</span>
    </div>
  );
}
