import SubTitle from "../../components/SubTitle";
import NewList from "../../components/NewList";

function Recommended() {
  return (
    <div className="mt-5">
      <SubTitle>Rekomendasi Untuk Anda</SubTitle>
      <NewList endpoint={"/olahraga"} category={"Olahraga"} />
    </div>
  );
}

export default Recommended;
