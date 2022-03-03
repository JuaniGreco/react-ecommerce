export const Contenedor = ({children}) => {

    const styles = {
        margin: '10 auto',
        maxWidth: '1800px'
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}