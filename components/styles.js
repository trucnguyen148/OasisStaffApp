import { StyleSheet } from 'react-native'
  
 const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        paddingTop: 15,
        margin: 10,
   },
    containerCollections: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerModal: {
        flex: 1, 
        margin: 10,
        paddingTop: 50
    },
    headerCard: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff'
    },
    floatRight: {
        marginLeft: 'auto',
        fontSize: 12
    },
    floatRightCart:{
        position: 'absolute',
        right: 45,
        top: '10%'
    },
    floatRightSchedule:{
        position: 'absolute',
        right: 25,
        top: '10%'
    },
    sameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    sameRowCalendar: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    sameRowBooking: {
        flexDirection: 'row',
        alignItems: 'center',marginBottom: 5,
    },
    sameRowMain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    sameRowButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50
    },
    sameRowFlatList:{
        elevation: 1,
        borderRadius: 2,
        flex: 1,
        flexDirection: 'row',  // main axis
        justifyContent: 'flex-start', // main axis
        alignItems: 'center', // cross axis
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    sameRowTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#c2185b',
        marginBottom: 20
    },
    itemFlatList:{
        padding: 10,
        width: '60%',
        flexShrink: 1,
        fontSize: 12
    },
    floatRightFlatList: {
        position: 'absolute',
        right: '15%',
        fontSize: 12
    },
    floatRightPriceFlatList:{
        position: 'absolute',
        right: 5,
        
    },
    floatRightButtonFlatList: {
        position: 'absolute',
        right: 0,
        width: '10%',
        height: 'auto',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    middle:{
        fontSize: 19,
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#c2185b'
    },
    floatRightDropDown:{
        backgroundColor: 'black',
        color: '#fff'
    },
    searchInput:{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        fontSize: 12
    },
    searchBackground:{
        backgroundColor: '#000000'
    },
    searchIcon:{
        color: '#fff'
    },
    buttonStyle: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#c2185b',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15
    },
    buttonStyleMain: {
        height: 'auto',
        width: '50%',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: '#c2185b',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    floatBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    floatRightPayment:{
        position: 'absolute',
        right: 5
    },
    widthDate:{
        width: '80%'
    },
    width: {
        width: "30%",
    },
    center:{
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    input: {
        marginLeft: 10,
        fontSize: 12,
        flex: 1
    },
    text: {
        marginLeft: 10,
        fontSize: 12,
        color: '#000000'
    },
    inputNumeric: {
        marginLeft: 10,
        fontSize: 12,
        flex: 1,
        width: '5%'
    },
    calendar: {
        paddingTop: 5,
        borderColor: '#eee',
        height: 350
    },
    space:{
        marginRight: 10
    },
    card: {
        margin: 10,
        padding: 15,
        width: 'auto',
        backgroundColor: '#000000',
        // borderRadius: 25,
        // borderWidth: 1.6,
        // borderColor: '#FF92A5',
        shadowOffset: { width: 6, height: 6 },  
        shadowColor: '#FF92A5',  
        shadowOpacity: 5,
        overflow: 'visible'
    },
    booking:{
        margin: 10,
        padding: 15,
        width: 'auto',
        backgroundColor: '#000000',
        borderRadius: 25,
        borderWidth: 1.6,
        borderColor: '#FF92A5',
    },
    schedule: {
        padding: 5,
        width: 'auto',
        backgroundColor: '#000000',
        borderRadius: 10,
        borderWidth: 1.6,
        borderColor: '#FF92A5',
    },
    heading:{
        fontFamily: "Rubik-Bold",
        textAlign: 'center',
        marginBottom: '10%',
        fontSize: 40,
        color: '#000000',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    countryStyle: {
        flex: 1,
        borderTopColor: '#211f',
        borderTopWidth: 1,
        padding: 12,
    },
    inputLogin:{
        width: '80%',
        height: 'auto',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
    },
    imageBooking:{
        width: 150,
        height: 100,
        // marginLeft: 'auto',
        // marginRight: 'auto'
    },
    iconTitle: {
        color: '#fff',
        fontSize: 20
    },
    icon: {
        color: '#c2185b',
        fontSize: 20
    },
    titleModal: {
        textAlign: 'center',
        marginBottom: 20,
    },
    inputVerify: {
        borderBottomColor: '#c2185b',
        borderBottomWidth: 1,
        marginRight: 8,
        textAlign: 'center'
    }
    
 })
  
 const buttons = StyleSheet.create({  
    primary: { 
        backgroundColor: '#c2185b',
        borderColor: '#c2185b',
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    primaryText: {
        color: '#fff',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10
    },
    upload: {
        borderColor: '#c2185b',
        borderRadius: 50,
        width: 'auto',
        position: 'absolute',
        right: 5
    },
    edituploadText:{
        fontSize: 10,
        paddingLeft: 2,
        paddingRight: 2
    },
    edit: {
        borderColor: '#c2185b',
        borderRadius: 50,
        width: '50%',
        marginLeft: '9%',
        marginRight: 'auto'
    },
    back: {
        borderColor: '#c2185b',
        borderRadius: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '15%'
    },
 })
  
 export { styles, buttons }    