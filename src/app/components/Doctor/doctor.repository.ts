import { Doctor } from "../../models/doctor.model";
import model from "./doctor.schema";

function mostrarTodoDoctor(){
    return model.find();
};

function BuscarDoctorRut(rutDoctor : string ){
    return model.findOne({rut : rutDoctor});
};

function agregarDoctor(doctor : Doctor){
    return model.create<Doctor>(doctor);
};

function eliminarDoctor(rutDoctor : string){
     return model.findOneAndRemove({rut : rutDoctor});
}

function existeDoctor(rutDoctor : string){
    return model.findOne({rut : rutDoctor});
}

export default {mostrarTodoDoctor , BuscarDoctorRut, agregarDoctor, eliminarDoctor, existeDoctor}
