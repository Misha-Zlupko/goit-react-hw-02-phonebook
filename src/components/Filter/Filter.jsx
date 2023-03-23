import PropTypes from 'prop-types';

export const Filter = ({ onChangeSearch, search }) => {
  return (
    <div>
      <form>
        <input value={search} type="text" onChange={onChangeSearch} />
      </form>
    </div>
  );
};

Filter.propTypes = {
  onChangeSearch: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};
