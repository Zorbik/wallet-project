import ProgressBar from "../ProgressBar/ProgressBar";

export default function ProgressSwitch({ value }) {
  if (value >= 0 && value < 6) {
    return <ProgressBar bgcolor="red" progress={0} />;
  }

  if (value === 6) {
    return <ProgressBar bgcolor="red" progress={100} text={'Low'} />;
  }
  if (value > 6 && value < 8) {
    return <ProgressBar bgcolor="orange" progress={200} text={'Fair'} />;
  }
  if (value >= 8 && value < 10) {
    return <ProgressBar bgcolor="#37f3ca" progress={300} text={'Good'} />;
  }
  if (value >= 10) {
    return (
      <ProgressBar bgcolor="#24cca7" progress={400} text={'Excellent'} />
    );
  }
  return null;
}