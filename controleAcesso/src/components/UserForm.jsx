import { User, UserExpert, Document, MailOption, Phone, Article } from 'grommet-icons'

const userForm = () => {
    return (
        <div>
            <div className="form-control">
                <i><UserExpert /></i>
                <label htmlFor="name">Nome Completo</label>
                <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Digite seu nome"
                    required
                />
            </div>
            <div className="form-control">
                <i><User /></i>
                <label htmlFor="rg">RG</label>
                <input
                    type="text"
                    name="text"
                    id="rg"
                    placeholder="Digite seu RG"
                    required
                />
            </div>
            <div className="form-control">
            <i><Document /></i>
                <label htmlFor="name">CPF</label>
                <input
                    type="number"
                    name="number"
                    id="cpf"
                    placeholder="Digite seu CPF"
                    required
                />
            </div>
            <div className="form-control">
            <i><MailOption /></i>
                <label htmlFor="name">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    required
                />
            </div>
            <div className="form-control">
                <i><Phone /></i>
                <label htmlFor="name">Celular</label>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Celular"
                    required
                />
            </div>
            <div className="form-control">
                <i><Article /></i>
                <label htmlFor="name">Contrato</label>
                <input
                    type="text"
                    name="contrato"
                    id="contrato"
                    required
                />
            </div>
        </div>
    )
}

export default userForm;