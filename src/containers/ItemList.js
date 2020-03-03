import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

const getItems = (items) => {
    return items;
};

const mapStateToProps = state => ({
    items: getItems(state.items)
})

export default connect(
    mapStateToProps
)(ItemList);
