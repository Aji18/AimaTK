import main from './main';

main()
    .catch(e => {
        // TODO: REMOVE THIS
        console.error(e);
        alert('UNCAUGHT ERROR HAPPEN!!');
    });