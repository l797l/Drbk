import postApi from "./../../app/auth/Post/postApi";

export default async function Card() {
  const data = await postApi();

  console.log(data);

  return (
    <>
    
    </>
  );
}