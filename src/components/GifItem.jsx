import PropTypes from 'prop-types';


export const GifItem = ({ url, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex-auto p-4">
      <div className="w-full">
        <img className="object-cover h-48 w-full" src={url} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
        </div>
      </div>
    </div>
  );
};

GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
