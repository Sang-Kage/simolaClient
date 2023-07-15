export default function EmptyData(colspan : number) {
  return (
    <tr>
      <td colSpan={colspan} className="text-center">
        <img
          src="/assets/images/empty.png"
          alt="emptyimage"
          className="img-fixed"
          width={500}
        />
      </td>
    </tr>
  );
}
