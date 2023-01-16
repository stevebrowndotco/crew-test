interface Props {
  onClick: () => void;
}

export const PointOfInterest = ({ onClick }: Props) => (
  <div className="p-4 flex justify-center items-center">
    <div
      onClick={onClick}
      className="bg-slate-200 rounded-full shadow-lg p-4 w-10 h-10"
      role="button"
    ></div>
  </div>
);
