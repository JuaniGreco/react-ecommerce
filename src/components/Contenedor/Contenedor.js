export const Contenedor = ({children}) => {

    const styles = {
        margin: '10 auto',
        maxWidth: '1200px'
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}