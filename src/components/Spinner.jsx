import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px  auto",
};

export const Spinner = ({ loading }) => {
  console.log(loading, "</div>");
  return (
    <ClipLoader
      color='blue'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

// export default Spinner
