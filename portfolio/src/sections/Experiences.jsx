import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div id="work" className="w-full scroll-mt-24">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
