import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingWrapper from "../loader/LoadingWrapper.tsx";
import { getLegoSetInventory } from "../../api/api.ts";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const SetInventory: FC = () => {
  const { inventoryId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["inventory"],
    queryFn: () => getLegoSetInventory(+inventoryId!),
  });

  return (
    <LoadingWrapper isLoading={isLoading}>
      <Parts>
        {data?.results.map(({ id, part, quantity }) => (
          <Part key={id}>
            <img
              src={part.part_img_url}
              alt="part image"
              width={192}
              height={192}
            />
            <p>{quantity}</p>
          </Part>
        ))}
      </Parts>
    </LoadingWrapper>
  );
};

export default SetInventory;

const Parts = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Part = styled.div`
  margin: 10px;
`;
