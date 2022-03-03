export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
    console.log(paths);
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    console.log(id);
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(res);
    const data = await res.json();
    console.log(data);

    return {
        props: {ninja:data}
    }
  }
  const Details = ({ninja}) => {
    return (
      <div>
        <h1>{ninja.name}</h1>
        <p>Email: {ninja.email}</p>
        <p>Website: {ninja.website}</p>
        <p>City: {ninja.address.city}</p>
      </div>
    );
  }
  export default Details;