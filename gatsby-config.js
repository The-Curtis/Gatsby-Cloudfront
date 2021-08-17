module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Site",
  },
  plugins: ["gatsby-plugin-styled-components"],
  {
    resolve: 'gatsby-source-dynamodb',
    options: {
      typeName: 'listStarbaseAHdataTables',
      accessKeyId: '${{ secrets.AWS_DB_ACCESS_KEY_ID }}', 
      secretAccessKey: '${{ secrets.AWS_DB_SECRET_ACCESS_KEY }}',
      region: '${{ secrets.AWS_REGION',
      params: {
        TableName : "starbaseAHdataTable",
        // OTHER PARAMS HERE
      }
    }
  }
  
};