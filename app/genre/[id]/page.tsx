type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
  return (
    <div>
      Welcome to the page {id} and genre name: {genre}
    </div>
  );
};
export default GenrePage;
