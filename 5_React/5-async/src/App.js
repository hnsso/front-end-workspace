import { getFetch, getAwait, getAxios, useGetQuery } from "./api/animal"; // api animal에 getFetch에 기능을 가져오겠다 !
import { useEffect, useState } from "react"; //life 사이클

const App = () => {
  // 우리가 넣을게 배열이여서 [] 초기값을 빈배열로 !
  // const [data, setData] = useState([]);

  // const dataLoad = async () => {
  //  const result = await getAxios();
  //  setData(result);
  // getAwait().then((result) => {
  //   console.log(result);
  //   setData(result);
  // });
  // };

  // useEffect(() => {
  //   //alert("!"); // 대괄호에 아무것도 없는게 처음 한번만 실행하는 !
  //   dataLoad();
  // }, []);

  // react-query
  const { data, isLoading, isError } = useGetQuery();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error.....</>;

  return (
    <>
      {/* 하나씩 가져올려고 할때 */}
      {data?.map((animal) => (
        //        key를 명시
        <div key={animal.no}>{animal.name}</div>
      ))}
    </>
  );
};

export default App;
