import prisma from "../config/database.js";

async function getCars() {
  const data = await prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = await prisma.cars.findFirst({
    where: { id }
  })
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await prisma.cars.findFirst({
    where: { licensePlate }
  })
  return data;
}

// FIXME: putz, infelizmente o year saiu como text no banco... my bad :/
async function createCar(model: string, licensePlate: string, year: number, color: string) {
  await prisma.cars.create({
    data: {
      model,
      color,
      licensePlate,
      year: year.toString()
    }
  })
}

async function deleteCar(id: number) {
  await prisma.cars.delete({
    where: { id }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;