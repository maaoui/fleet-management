package pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/*
    @author Kacper Buczak 
*/
public class OtherExpenseDTO extends BaseExpenseDTO {

    @NotNull
    @Min(value = 0)
    @Max(value = Integer.MAX_VALUE)
    private Integer itemCount;

    public OtherExpenseDTO() {
    }

    public Integer getItemCount() {
        return itemCount;
    }

    public void setItemCount(Integer itemCount) {
        this.itemCount = itemCount;
    }
}
