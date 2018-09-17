// import community package
import * as React from "react";
import { Typography, withStyles } from "@material-ui/core";

// import types
import {IQuestionSubDimension} from "../../../../../../reducers/question";

interface ISubDimensionViewViewProps {
    subdimension: IQuestionSubDimension,
}

function SubDimensionView({ children, subdimension, classes }: { children?: any, subdimension: IQuestionSubDimension, classes: any }) {
    return (
        <div className={classes.root}>
            <Typography variant="subheading" >
                Bagian { subdimension.subdimension }
            </Typography>
            <Typography variant="headline" style={{ marginBottom: 5 }} >
                { subdimension.name }
            </Typography>
            { children }
        </div>
    )
}

const styles = (theme: any) => ({
    root: {
        marginTop: 10,
        width: 740,
    }
});

export default withStyles(styles as any)<ISubDimensionViewViewProps>(SubDimensionView);