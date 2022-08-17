import * as httpRequest from '~/utils/httpRequest';
import PropTypes from 'prop-types';
export const search = async (query, page = 1, language = 'en-US', include_adult = false) => {
    try {
        const response = await httpRequest.get('search/movie', {
            params: {
                query: query,
                page,
                language: 'en-US',
                include_adult,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
search.prototypes = {
    query: PropTypes.string,
    page: PropTypes.number,
    language: PropTypes.string,
    include_adult: PropTypes.bool,
};
