import styles from "./Albums.module.css";
import { Link } from "react-router-dom";
import { useGetAlbumsQuery } from "../../store/albumsApi";

export default function Albums() {
  const {data: albums, isLoading, isFetching, isError} = useGetAlbumsQuery();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  } 

  if (isError) {
    return <div>Something went wrong!</div>;
  } 

  return (
    <ul className={styles.albumList}>
      {albums?.map((album) => (
        <li key={album.id} className={styles.albumList__item}>
          <p>{album.id}</p>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </li>
      ))}
    </ul>
  );
}
