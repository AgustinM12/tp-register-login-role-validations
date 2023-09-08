import bcrypt from 'bcrypt'

export const hashPass = async (text) => {
  return await bcrypt.hash(text, 10)
};