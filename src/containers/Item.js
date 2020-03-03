import { connect } from 'react-redux';
import { removeItem } from '../actions';
import Item from '../components/Item';

const getItem = (item) => {
    return item;
};

const mapStateToProps = (state, ownProps) => ({
    item: getItem(ownProps)
})

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);
