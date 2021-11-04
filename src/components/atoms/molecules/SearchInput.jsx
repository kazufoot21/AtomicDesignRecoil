import { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../button/PrimaryButton";
import { Input } from "../input/input";

export const SearchInput = memo(() => {
  console.log("searchInput");
  return (
    <Scontainer>
      <Input placeholder="What you search " />
      <SButtonWrapper>
        <PrimaryButton>search</PrimaryButton>
      </SButtonWrapper>
    </Scontainer>
  );
});

const Scontainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
