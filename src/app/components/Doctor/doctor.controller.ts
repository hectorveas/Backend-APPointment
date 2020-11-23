
import { Doctor } from "../../models/doctor.model";
import doctorRepository from "./doctor.repository"

function mostrarTodoDoctor(){
    return doctorRepository.mostrarTodoDoctor();
};

function BuscarDoctorRut(rut : string){
    
    return doctorRepository.BuscarDoctorRut(rut);
};


function agregarDoctor(doctor : Doctor){

    return doctorRepository.agregarDoctor(doctor); 
};

function eliminarDoctor(rutDoctor : string){
    return doctorRepository.eliminarDoctor(rutDoctor);
}

async function existeDoctor(rutDoctor : string){
    const doctor : Doctor | null =  await doctorRepository.existeDoctor(rutDoctor);
    if(doctor != null){
        return true;
    }else{
        return false;
    }
}


export default {mostrarTodoDoctor , BuscarDoctorRut, agregarDoctor, eliminarDoctor,existeDoctor}