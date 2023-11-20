using Microsoft.AspNetCore.Mvc;
using AppdataContext.data;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using model.tablet;

public class TabletController : ControllerBase
{

    private readonly AppDataContext _ctx;

    public TabletController(AppDataContext ctx) => _ctx = ctx;

    [HttpGet]
    [Route("listar")]

    public IActionResult listar()
    {
        try{
            List<Tablet> tablets = _ctx.Tablets.ToList();
            return tablets.Count == 0 ? NotFound() : Ok(tablets);

        }catch(Exception e){
            return BadRequest(e.Message);
        }
    }

    [HttpGet]
    [Route("{id}")]

    public IActionResult buscar(int id )
    {

        Tablet? tablet = _ctx.Tablets.FirstOrDefault(e => e.tabletId == id);
        return tablet == null ? NotFound("") : Ok(tablet);

    }

    [HttpPost]
    [Route("Cadastrar")]

    public IActionResult cadastrar([FromBody] Tablet tablet)
    {
        try{

            _ctx.Add(tablet);
            _ctx.SaveChanges();
            return Created("", tablet);

        }catch(Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPut]
    [Route("Atializar/{id}")]

    public IActionResult atualizar(int id, [FromBody] Tablet tabletAtualizado)
    {

        if(tabletAtualizado == null)
        {
            return BadRequest("Nenhum tablet encontrado");
        }
        
        Tablet? tablet = _ctx.Tablets.FirstOrDefault(e => e.tabletId == id);

        if(tablet == null)
        {
            return BadRequest("Tablet não encontrado");
        }
       
        tablet.modelo = tabletAtualizado.modelo;
        tablet.imei = tabletAtualizado.imei;
        tablet.plaqueta = tabletAtualizado.plaqueta;

        _ctx.Update(tablet);
        _ctx.SaveChanges();
        return Ok(tablet);
        
    }

    [HttpDelete]
    [Route("deletar/{id}")]

    public IActionResult DeletarTablet(int id)
    {

        Tablet? tablets = _ctx.Tablets.FirstOrDefault(e => e.tabletId == id);

        try{
        if( tablets != null){
        _ctx.Remove(tablets);
        _ctx.SaveChanges();
        return NoContent();
        }else{
            return BadRequest("Nenhum tablet encontrado");
        }
        }catch(Exception e)
        {
            return BadRequest(e.Message);
        }
    }



}