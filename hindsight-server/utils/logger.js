const prisma = require("./prisma");

async function activity(type, user, des) {
    try {
      await prisma.activity.create({
        data: {
          type,
          user,
          des,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }
  
  module.exports = { activity };