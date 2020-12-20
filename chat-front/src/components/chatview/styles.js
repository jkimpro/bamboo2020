const styles = theme => ({

    optionBtn:{
      color: 'white',
      float: 'bottom',
      backgroundColor: '#9fa8da'
    },

    content: {
      height: 'calc(100vh - 100px)',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      overflowY: 'scroll',
      top: '50px',
      width: 'calc(100% - 300px)',
      position: 'absolute', 
      paddingBottom: '10px',
    },
  
    userSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      color: 'white',
      width: '200px',
      borderRadius: '10px',
      backgroundColor: '#2196f3'
    },
  
    friendSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#ff94c2',
      color: 'white',
      width: '200px',
      borderRadius: '10px'
    },
  
    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '50px',
      backgroundColor: '#344195',
      position: 'fixed',
      marginLeft: '301px',
      fontSize: '18px',
      textAlign: 'center',
      color: 'white',
      paddingTop: '10px',
      boxSizing: 'border-box'
    },
    paper: {
      //padding: theme.spacing(1),
      textAlign: 'center',
      
      color: 'white',
    }
  
  });
  
  export default styles;