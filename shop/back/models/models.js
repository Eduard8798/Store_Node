const sequalize = require('../Bdate/db')

const {DataTypes} = require('sequelize')

const User = sequalize.define('user',{
    id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email: {type: DataTypes.STRING,unique:true},
    password: {type:DataTypes.STRING},
    role: {type: DataTypes.STRING,defaultValue: "USER"}
})

const Basket = sequalize.define('basket',{
    id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})

const BasketDevice = sequalize.define('basket_device',{
    id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})

const Device = sequalize.define('device',{
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING,unique: true,allowNull: false},
    price:{type: DataTypes.INTEGER,allowNull: false},
    rating:{type: DataTypes.INTEGER,defaultValue: 0},
    img:{type: DataTypes.STRING,allowNull: false}

})

const Type = sequalize.define('type',{
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,unique: true,allowNull: false}
})

const Brand = sequalize.define('brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,unique:true,allowNull: false}
})

const Rating = sequalize.define('rating',{
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER,allowNull: false}
})

const DeviceInfo = sequalize.define('device_info',{
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING,allowNull: false},
    description: {type: DataTypes.STRING,allowNull: false},
})

const TypeBrand = sequalize.define('type_brand',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement:true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo,{as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand,{through:TypeBrand})
Brand.belongsToMany(Type,{through:TypeBrand})

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}