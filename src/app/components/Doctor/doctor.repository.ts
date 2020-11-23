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

function modificarNombreDoctor(idDoctor : String, nombre : string){
    return model.findByIdAndUpdate({_id : idDoctor}, {nombreDoctor : nombre});
};

function modificarApellidoDoctor(idDoctor : String, apellido : string){
    return model.findByIdAndUpdate({_id : idDoctor}, {apellidoDoctor : apellido});
};

function modificarMailDoctor(idDoctor : String, emailDoctor : string){
    return model.findByIdAndUpdate({_id : idDoctor}, {email : emailDoctor});
};

function modificarFonoDoctor(idDoctor : String, fonoDoctor : string){
    return model.findByIdAndUpdate({_id : idDoctor}, {fono : fonoDoctor});
};

function modificarRutDoctor(idDoctor : String, rutDoctor : string){
    return model.findByIdAndUpdate({_id : idDoctor}, {rut: rutDoctor});
};

function modificarContrasenaDoctor(idDoctor : String, contrasenaDoctor : string){
    return model.findByIdAndUpdate({_id : idDoctor}, {contrasena : contrasenaDoctor});
};

function modificarEspecialidadDoctor(idDoctor : String, especialidadDoctor : string){
    return model.findByIdAndUpdate({_id : idDoctor}, {especialidad : especialidadDoctor});
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
