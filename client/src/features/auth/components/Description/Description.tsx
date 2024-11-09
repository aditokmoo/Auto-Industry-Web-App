import { Control, Controller, FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import styles from './Description.module.scss'
import Button from '../../../../components/Button/Button';

interface PropTypes {
    control: Control<FieldValues>,
    setActiveTab: (val: number) => void,
    handleSubmit: UseFormHandleSubmit<FieldValues>,
}

export default function Description({ control, setActiveTab, handleSubmit }: PropTypes) {
    return (
        <div className={styles.form}>
            <h2 className={styles.registerTitle}>Description</h2>
            <div className={styles.inputField}>
                <label htmlFor='desc'>Write something about your company and services that you provide</label>
                <Controller
                    control={control}
                    name="desc"
                    render={({ field }) => (
                        <textarea
                            {...field}
                            id={field.name}
                            placeholder='Enter some details'
                            className={styles.fileInput}
                        />
                    )}
                />
            </div>

            <div className={styles.btn}>
                <Button size="medium" onClick={handleSubmit(() => setActiveTab(3))}>Next</Button>
            </div>

            <p className={styles.goBackText}>
                Want to return back, and change your personal details? <span className={styles.backLink} onClick={() => setActiveTab(1)}>Back</span>
            </p>
        </div>
    )
}
