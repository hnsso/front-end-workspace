import { useParams, useNavigate } from "react-router-dom";
import { getAnimal, updateAnimal } from "../api/animal"; // 우리가 animal.js에서 정보를 쓰기위해서 두개를 가져와야한다
import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin-right: 5px;
    padding: 5px;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 4px;
    border: 1px solid black;
  }
`;

const Detail = () => {
  const { no } = useParams;
  const navigate = useNavigate(); // 수정후 이동하기위해
  const [animal, setAnimal] = useState({ name: "", age: 0 }); // 여러개 값은 [] 하나값을 가져오는데있어서는 {} 중괄호

  const animalAPI = async () => {
    const response = await getAnimal(no);
    setAnimal(response.data);
  };

  useEffect(() => {
    animalAPI();
  }, []);

  const update = async () => {
    await updateAnimal(animal);
    navigate("/");
  };

  return (
    <Div>
      <input
        type="text"
        value={animal.name}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        value={animal.age}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <button onClick={update}>정보 수정</button>
    </Div>
  );
};
export default Detail;
