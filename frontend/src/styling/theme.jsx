export default {
    palette: {
      primary: {
        light: '#ededed',
        main: '#111',
        dark: '#333',
        contrastText: '#fff'
      },
      secondary: {
        light: '#cdcdcd',
        main: '#dcdcdc',
        dark: '#ededed',
        contrastText: '#111'
      }
    },
    layout:{
      styles: {
        typography: {
          useNextVariants: true
        },
        form: {
          textAlign: 'center'
        },
        image: {
          margin: '20px auto 20px auto'
        },
        logo:{
          margin: '20px auto 20px auto',
          maxWidth: '6em',
          borderRadius: '.4em'
        },
        pageTitle: {
          margin: '10px auto 10px auto'
        },
        textField: {
          margin: '10px auto 10px auto'
        },
        button: {
          margin: 20,
          marginBottom: 20,
          position: 'relative'
        },
        customError: {
          color: 'red',
          fontSize: '0.8rem',
          marginTop: 10
        },
        progress: {
          position: 'absolute'
        },
        invisibleSeparator: {
          border: 'none',
          margin: 4
        },
        visibleSeparator: {
          width: '100%',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          marginBottom: 20
        },
        paper: {
          padding: 20
        },
        menu: {
            display: 'flex',
            flexDirection: 'column',
            padding: '1em',
            lineHeight: 2
        }
      },
      profile: {
        '& .image-wrapper': {
          textAlign: 'center',
          position: 'relative',
          '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
          }
        },
        '& .profile-image': {
          width: 200,
          height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
        },
        '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
            verticalAlign: 'middle'
          },
          '& a': {
            color: '#00bcd4'
          }
        },
        '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
        },
        '& svg.button': {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      buttons: {
        textAlign: 'center',
        '& a': {
          margin: '20px 10px'
        }
      }
    }
  };
  