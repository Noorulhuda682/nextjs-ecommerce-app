import React from 'react';
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
import NextLnk from "next/link"
import Image from "next/image"
import { Link, Grid, List, ListItem, Typography, Card, Button } from "@material-ui/core"

const ProductScreen = () => {
    const router = useRouter();
    const classes = useStyles();

    const { slug } = router.query;
    const product = data.products.find(a => a.slug === slug)
    console.log("Router===>", product);
    if (!product) return <div>Product not found</div>

    return (
        <Layout title={product.name} description={product.description}>
            <div className={classes.section}>
                <NextLnk href="/" passHref>
                    <Link>back to products</Link>
                </NextLnk>
            </div>
            <Grid container spacing={1}
            // style={{ background: "lightgray" }}
            >
                <Grid item md={6} xs={12}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        layout="responsive"
                    />
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem>
                            <Typography component="h1" variant="h4  ">
                                {product.name}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Category:{product.category}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Brand:{product.brand}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Rating:{product.rating} stars ({product.numReviews} reviews)
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Description:{product.description}
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Price</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>${product.price}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Status</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>${product.price > 0 ? 'In stock' : 'Unavailabe'}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant="contained" color="primary">
                                    Add to Cart
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}


export default ProductScreen