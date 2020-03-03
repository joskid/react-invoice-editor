import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { removeItem } from '../actions';

const mapStateToProps = (state) => ({
    lineItems: state.lineItems
});

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);
