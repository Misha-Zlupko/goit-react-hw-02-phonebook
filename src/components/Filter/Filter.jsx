export const Filter = ({ onChangeSearch, search }) => {
  return (
    <div>
      <form>
        <input value={search} type="text" onChange={onChangeSearch} />
      </form>
    </div>
  );
};
