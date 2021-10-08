import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function CopyrightComponent() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://vowela.com/">
                VowelA
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
