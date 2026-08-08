

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
 

  return (<>{(await params).id}</>);
}
