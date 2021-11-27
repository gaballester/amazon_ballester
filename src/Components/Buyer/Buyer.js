import { SpaceBar } from '@mui/icons-material';
import { FormHelperText, Input, InputLabel } from '@mui/material';
import { FormControl, Button, Grid, Paper, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: 2,
    },
    papper: {
        padding: "20px",
        width: "100%",
        height: "30vh"
    },
    form: {
        width: '100%'
    },
}));

const Buyer = ({onAddBuyer}) => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const { margin, papper } = useStyles();

    const onSubmit = (buyerData, e) => {
        onAddBuyer(buyerData)
        console.log('submit', buyerData)
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Paper className={papper} elevation={4} square={false}>

                        <Grid align="center" >
                            Aditional Personal Information
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={6} >
                                <FormControl fullWidth={true} >
                                    <InputLabel htmlFor="name">Full Name</InputLabel>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter Buyer Full Name"
                                        aria-decribedby="name-helper-text"
                                        {...register(
                                            'name',
                                            {
                                                required: "Please enter a Buyer Full Name",
                                                pattern: { value: true, message: "Please enter a Buyer Full Name" },
                                                minLength: { value: 3, message: "Buyer Full Name must be at least 3 characters long" },
                                                maxLength: { value: 50, message: "Buyer Full Name must be at most 50 characters long" }
                                            })}
                                    />
                                    {errors.name &&
                                        <FormHelperText id="name-helper-text" error>
                                            {errors.name.message}</FormHelperText>}

                                </FormControl>
                            </Grid>
                            <Grid item item xs={6}>
                                <FormControl fullWidth={true}>
                                    <InputLabel htmlFor="phone">Phone</InputLabel>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        placeholder="Enter a phone number"
                                        aria-decribedby="phone-helper-text"
                                        {...register(
                                            'phone',
                                            {
                                                required: "Please enter a Buyer phone number",
                                                pattern: { value: true, message: "Please enter a Buyer phone number" },
                                            }
                                        )}
                                    />
                                    {errors.phone &&
                                        <FormHelperText error id="phone-helper-text">
                                            {errors.phone.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth={true}>
                                    <InputLabel htmlFor="email">e-mail</InputLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder=""
                                        aria-decribedby="email-helper-text"
                                        {...register(
                                            'email',
                                            {
                                                required: "Please enter a Buyer e-mail",
                                                pattern: { value: true, message: "Please enter a valid Buyer e-mail" },
                                            })}
                                    />
                                    {errors.email &&
                                        <FormHelperText error id="email-helper-text">
                                            {errors.email.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth={true}>
                                    <InputLabel htmlFor="address">Address</InputLabel>
                                    <Input
                                        id="address"
                                        name="address"
                                        type="text" placeholder=""
                                        aria-decribedby="address-helper-text"
                                        {...register(
                                            'address',
                                            {
                                                required: "Please enter a Buyer address",
                                                pattern: { value: true, message: "Please enter a Buyer address" },
                                                minLength: { value: 10, message: "Address must be at least 10 characters long" },
                                                maxLength: { value: 80, message: "Address must be at most 80 characters long" }
                                            })}
                                    />
                                    {errors.address &&
                                        <FormHelperText error id="eaddress-helper-text">
                                            {errors.address.message}</FormHelperText>}
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid my={4} container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center">
                            <Button 
                                variant="contained" 
                                color="primary" 
                                type="submit" 
                                align="center"
                                
                            >
                                Buyer
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </form>
        </div>
    )
}

export default Buyer
