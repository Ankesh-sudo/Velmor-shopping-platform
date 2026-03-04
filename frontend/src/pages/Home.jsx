import { Box, Typography, Container, Grid, Button, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const features = [
    { icon: <LocalShippingIcon />, title: "Free Shipping", desc: "On orders over $50" },
    { icon: <SecurityIcon />, title: "Secure Payment", desc: "100% secure transactions" },
    { icon: <AutorenewIcon />, title: "Easy Returns", desc: "30-day return policy" },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          background: "radial-gradient(circle at 70% 50%, #1a1a1a 0%, #000000 100%)",
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Chip 
                    label="NEW SEASON ARRIVALS" 
                    color="secondary" 
                    size="small" 
                    sx={{ mb: 2, fontWeight: 'bold' }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: '3rem', md: '4.5rem' },
                      background: "linear-gradient(135deg, #C9A227 0%, #ffffff 50%, #C9A227 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundSize: '200% 200%',
                      animation: 'gradient 3s ease infinite',
                      '@keyframes gradient': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    Discover Premium Fashion
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mt: 2, 
                      color: "#ccc",
                      maxWidth: '500px',
                      lineHeight: 1.6,
                    }}
                  >
                    Velmora connects fashion brands with customers worldwide. 
                    Experience luxury redefined.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                    <Button
                      component={Link}
                      to="/products"
                      variant="contained"
                      color="secondary"
                      size="large"
                      endIcon={<ShoppingBagIcon />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        background: 'linear-gradient(45deg, #C9A227 30%, #e5b73b 90%)',
                        boxShadow: '0 3px 15px rgba(201, 162, 39, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #e5b73b 30%, #C9A227 90%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 5px 20px rgba(201, 162, 39, 0.4)',
                        },
                      }}
                    >
                      Shop Now
                    </Button>
                    
                    <Button
                      component={Link}
                      to="/collections"
                      variant="outlined"
                      color="secondary"
                      size="large"
                      endIcon={<TrendingFlatIcon />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderWidth: '2px',
                        '&:hover': {
                          borderWidth: '2px',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Explore
                    </Button>
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ mt: 6, display: 'flex', gap: 4 }}>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#C9A227', fontWeight: 'bold' }}>
                        500+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#999' }}>
                        Brands
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#C9A227', fontWeight: 'bold' }}>
                        50k+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#999' }}>
                        Customers
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#C9A227', fontWeight: 'bold' }}>
                        100+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#999' }}>
                        Countries
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                    alt="Fashion"
                    sx={{
                      width: '100%',
                      maxWidth: '500px',
                      height: 'auto',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(201, 162, 39, 0.2)',
                      transform: 'perspective(1000px) rotateY(-5deg)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg)',
                      },
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* FEATURES SECTION */}
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        borderColor: '#C9A227',
                        boxShadow: '0 10px 30px rgba(201, 162, 39, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ 
                      color: '#C9A227', 
                      fontSize: '2.5rem',
                      mb: 2,
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="#999">
                      {feature.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FEATURED PRODUCTS */}
        <Box sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                textAlign: 'center',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 4,
                  backgroundColor: '#C9A227',
                  borderRadius: 2,
                }
              }}
            >
              Trending from Zentrix
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                textAlign: 'center', 
                color: '#999', 
                mb: 6,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Discover our most sought-after pieces that define this season's style
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {featuredProducts.map((product, index) => (
              <Grid item xs={12} md={4} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                component={Link}
                to="/products"
                variant="outlined"
                color="secondary"
                size="large"
                endIcon={<TrendingFlatIcon />}
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                View All Products
              </Button>
            </motion.div>
          </Box>
        </Box>

        {/* COLLECTION BANNER */}
        <Box sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper
              sx={{
                p: { xs: 4, md: 8 },
                background: 'linear-gradient(135deg, #C9A227 0%, #b3891e 100%)',
                borderRadius: '24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -80,
                  left: -80,
                  width: 300,
                  height: 300,
                  background: 'rgba(0,0,0,0.1)',
                  borderRadius: '50%',
                },
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: '#000',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Summer Collection 2024
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mt: 2, 
                  color: '#000',
                  opacity: 0.8,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Up to 40% off on selected items
              </Typography>
              <Button
                component={Link}
                to="/products"
                variant="contained"
                sx={{
                  mt: 4,
                  px: 6,
                  py: 1.5,
                  backgroundColor: '#000',
                  color: '#C9A227',
                  fontSize: '1.1rem',
                  position: 'relative',
                  zIndex: 1,
                  '&:hover': {
                    backgroundColor: '#1a1a1a',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Shop Summer Sale
              </Button>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}