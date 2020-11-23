
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

function modificarNombreDoctor(idDoctor : String, nombre : string){
    return doctorRepository.modificarNombreDoctor(idDoctor, nombre);
};

function modificarApellidoDoctor(idDoctor : String, apellido : string){
    return doctorRepository.modificarApellidoDoctor(idDoctor, apellido);
};

function modificarMailDoctor(idDoctor : String, emailDoctor : string){
    return doctorRepository.modificarMailDoctor(idDoctor, emailDoctor);
};

function modificarFonoDoctor(idDoctor : String, fonoDoctor : string){
    return doctorRepository.modificarFonoDoctor(idDoctor, fonoDoctor);
};

function modificarRutDoctor(idDoctor : String, rutDoctor : string){
    return doctorRepository.modificarRutDoctor(idDoctor, rutDoctor);
};

function modificarContrasenaDoctor(idDoctor : String, contrasenaDoctor : string){
    return doctorRepository.modificarContrasenaDoctor(idDoctor, contrasenaDoctor);
};

function modificarEspecialidadDoctor(idDoctor : String, especialidadDoctor : string){
    return doctorRepository.modificarEspecialidadDoctor(idDoctor, especialidadDoctor);
};


export default {
    mostrarTodoDoctor, 
    BuscarDoctorRut, 
    agregarDoctor, 
    eliminarDoctor, 
    existeDoctor,
    modificarNombreDoctor,
    modificarApellidoDoctor,
    modificarMailDoctor,
    modificarFonoDoctor,
    modificarRutDoctor,
    modificarContrasenaDoctor,
    modificarEspecialidadDoctor
}