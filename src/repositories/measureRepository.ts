import { IMeasureModel } from '../models/Measure'
import { get } from './arduinoRepository'

export const save = async (measure: IMeasureModel, arduinoId: string) => {
  const arduino = await get(arduinoId, true)

  measure.arduino = arduino;

  await measure.save()
  arduino.measures.push(measure._id)
  await arduino.save()
  
  return measure
}