import { WrapperItem } from "./Wrapper.styled";

function Wrapper({ children }) {
  return (
    <WrapperItem>
      {/* pop-up end*/}
      {children}
    </WrapperItem>
  );
}

export default Wrapper;
