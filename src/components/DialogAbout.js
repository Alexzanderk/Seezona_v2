import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const notes = [
    'React v16.8.0-alpha.1 with Hooks',
    'Used Material-UI',
    'Used redux selectors, configure store ',
    "All actions and reducers stay in store folder it's not so big project to use one of the best practice ",
    'I create API class and export instance to easy use requests',
    'Used Promise and async await to show that I can',
    'NO remove logger you can open browser console to see actions and state(redux store) ',
    'Create dynamic head tittle - look on browser tab',
    'Auto check I set on 10 seconds',
    "I didn't have enough time to read normalizr 😔",
    "I didn't have enough time write all tests 😔",
    "I didn't have enough time create component to show Error 😔",
    "I didn't have enough time to deep refactoring 😔"
];

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const DialogAbout = ({ isOpen, handleClose }) => {
    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            maxWidth="md"
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                TEST SEEZONA
            </DialogTitle>
            <DialogContent>
                <div style={{ color: 'red' }}>
                    What you need to do? Add few cities, because some element
                    displayed when you add few elements
                </div>
                <br />
                <a href="http://">Github repo</a> <br />
                <h3
                    style={{
                        textDecoration: 'underline',
                        fontWeight: 500,
                        lineHeight: 1.2
                    }}
                >
                    Notes:
                </h3>
                <ul style={{ listStyle: 'decimal', fontFamily: 'Roboto' }}>
                    {notes.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p>You can visit first test work to see my proggres:</p>
                <ul>
                    <li>
                        <a
                            href="https://seezona-fvdyhddljm.now.sh/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deploy
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Alexzanderk/seezona-test"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github repo
                        </a>
                    </li>
                </ul>
                <h4>If you find some bugs, please tell me! 👌🏻</h4>
                <br /> <br /> <br />
                Contacts: <br />
                Alexandr Kotsarev <br />
                Tel: <a href="tel:+380951708843">095-170-88-43</a> <br />
                Email:{' '}
                <a href="mailto:kotsarev.a@icloud.com">kotsarev.a@icloud.com</a>
            </DialogContent>
        </Dialog>
    );
};

export default DialogAbout;
