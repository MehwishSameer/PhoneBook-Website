module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },},
        {
            timestamps: false
        });
        Posts.associate = (models) => {
            Posts.hasMany(models.Comments, {
              onDelete: "cascade",
            });
          };

    return Posts;
};